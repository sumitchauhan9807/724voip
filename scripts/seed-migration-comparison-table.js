'use strict';

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const envPath = path.resolve(__dirname, '..', '.env');
const env = Object.fromEntries(
  fs
    .readFileSync(envPath, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith('#') && line.includes('='))
    .map((line) => {
      const index = line.indexOf('=');
      return [line.slice(0, index), line.slice(index + 1)];
    }),
);

const columns = [
  { label: 'Functions', highlighted: false },
  { label: 'JustCall', highlighted: true },
  { label: 'Aircall', highlighted: false },
  { label: 'CloudTalk', highlighted: false },
  { label: 'Dialpad', highlighted: false },
  { label: 'Kixie', highlighted: false },
  { label: 'RingCentral', highlighted: false },
  { label: 'OpenPhone', highlighted: false },
  { label: 'PhoneBurner', highlighted: false },
  { label: 'Nooks', highlighted: false },
];

const rows = [
  {
    feature: 'Power, Dynamic, and 10-line Predictive Dialers',
    hidden: false,
    cells: ['included', 'not_included', 'not_included', 'not_included', 'not_included', 'included', 'not_included', 'not_included', 'included'],
  },
  {
    feature: 'Smart Call Routing',
    hidden: false,
    cells: ['included', 'not_included', 'not_included', 'included', 'included', 'included', 'not_included', 'not_included', 'not_included'],
  },
  {
    feature: 'Multi-level IVRs',
    hidden: false,
    cells: ['included', 'included', 'not_included', 'included', 'included', 'included', 'not_included', 'not_included', 'not_included'],
  },
  {
    feature: 'Voicemail',
    hidden: false,
    cells: ['included', 'not_included', 'not_included', 'included', 'not_included', 'included', 'included', 'included', 'included'],
  },
  {
    feature: 'Call Recording',
    hidden: true,
    cells: ['included', 'included', 'included', 'included', 'included', 'not_included', 'included', 'included', 'included'],
  },
  {
    feature: 'Call Queues',
    hidden: true,
    cells: ['included', 'included', 'included', 'not_included', 'included', 'included', 'not_included', 'not_included', 'not_included'],
  },
  {
    feature: 'Bulk SMS',
    hidden: true,
    cells: ['included', 'not_included', 'not_included', 'not_included', 'not_included', 'included', 'not_included', 'not_included', 'not_included'],
  },
  {
    feature: 'SMS Automation',
    hidden: true,
    cells: ['included', 'not_included', 'not_included', 'not_included', 'not_included', 'not_included', 'not_included', 'not_included', 'not_included'],
  },
  {
    feature: 'Call Center Analytics',
    hidden: true,
    cells: ['included', 'included', 'included', 'not_included', 'not_included', 'included', 'not_included', 'included', 'included'],
  },
  {
    feature: 'Open APIs and Webhooks',
    hidden: true,
    cells: ['included', 'included', 'included', 'not_included', 'not_included', 'included', 'included', 'not_included', 'not_included'],
  },
];

const title = {
  heading: 'Switching to JustCall makes sense',
  subHeading: 'See exactly why teams feel more confident, capable, and cared for after switching to JustCall.',
};

const insertTitle = async (conn, comparisonTableId) => {
  const [titleResult] = await conn.query(
    'INSERT INTO components_basic_titles (heading, sub_heading) VALUES (?, ?)',
    [title.heading, title.subHeading],
  );

  await conn.query(
    `INSERT INTO components_migration_comparison_tables_cmps
      (entity_id, cmp_id, component_type, field, \`order\`)
     VALUES (?, ?, ?, ?, ?)`,
    [comparisonTableId, titleResult.insertId, 'basic.title', 'title', null],
  );
};

const insertColumns = async (conn, comparisonTableId) => {
  for (const [index, column] of columns.entries()) {
    const [result] = await conn.query(
      'INSERT INTO components_migration_comparison_columns (label, highlighted) VALUES (?, ?)',
      [column.label, column.highlighted],
    );

    await conn.query(
      `INSERT INTO components_migration_comparison_tables_cmps
        (entity_id, cmp_id, component_type, field, \`order\`)
       VALUES (?, ?, ?, ?, ?)`,
      [comparisonTableId, result.insertId, 'migration.comparison-column', 'columns', index + 1],
    );
  }
};

const insertRows = async (conn, comparisonTableId) => {
  for (const [rowIndex, row] of rows.entries()) {
    const [rowResult] = await conn.query(
      'INSERT INTO components_migration_comparison_rows (feature, hidden) VALUES (?, ?)',
      [row.feature, row.hidden],
    );

    await conn.query(
      `INSERT INTO components_migration_comparison_tables_cmps
        (entity_id, cmp_id, component_type, field, \`order\`)
       VALUES (?, ?, ?, ?, ?)`,
      [comparisonTableId, rowResult.insertId, 'migration.comparison-row', 'rows', rowIndex + 1],
    );

    for (const [cellIndex, cellValue] of row.cells.entries()) {
      const [cellResult] = await conn.query(
        'INSERT INTO components_migration_comparison_cells (value, text) VALUES (?, ?)',
        [cellValue, null],
      );

      await conn.query(
        `INSERT INTO components_migration_comparison_rows_cmps
          (entity_id, cmp_id, component_type, field, \`order\`)
         VALUES (?, ?, ?, ?, ?)`,
        [rowResult.insertId, cellResult.insertId, 'migration.comparison-cell', 'cells', cellIndex + 1],
      );
    }
  }
};

async function ensureComparisonTable(conn, migrationEntityId) {
  const [existingRows] = await conn.query(
    `SELECT cmp_id FROM migrations_cmps
      WHERE entity_id = ? AND component_type = ? AND field = ?
      LIMIT 1`,
    [migrationEntityId, 'migration.comparison-table', 'content'],
  );

  let comparisonTableId = existingRows[0]?.cmp_id;

  if (!comparisonTableId) {
    const [tableResult] = await conn.query(
      `INSERT INTO components_migration_comparison_tables
        (initial_visible_rows, show_more_label, show_less_label)
       VALUES (?, ?, ?)`,
      [4, 'See More', 'See Less'],
    );

    comparisonTableId = tableResult.insertId;

    await conn.query(
      'UPDATE migrations_cmps SET `order` = `order` + 1 WHERE entity_id = ? AND field = ? AND `order` >= 6',
      [migrationEntityId, 'content'],
    );

    await conn.query(
      `INSERT INTO migrations_cmps
        (entity_id, cmp_id, component_type, field, \`order\`)
       VALUES (?, ?, ?, ?, ?)`,
      [migrationEntityId, comparisonTableId, 'migration.comparison-table', 'content', 6],
    );
  } else {
    await conn.query(
      `UPDATE components_migration_comparison_tables
       SET initial_visible_rows = ?, show_more_label = ?, show_less_label = ?
       WHERE id = ?`,
      [4, 'See More', 'See Less', comparisonTableId],
    );

    await conn.query('DELETE FROM components_migration_comparison_tables_cmps WHERE entity_id = ?', [comparisonTableId]);
  }

  await insertTitle(conn, comparisonTableId);
  await insertColumns(conn, comparisonTableId);
  await insertRows(conn, comparisonTableId);

  return comparisonTableId;
}

async function main() {
  const conn = await mysql.createConnection({
    host: env.DATABASE_HOST || 'localhost',
    port: Number(env.DATABASE_PORT || 3306),
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  });

  await conn.beginTransaction();

  try {
    const [migrationRows] = await conn.query('SELECT id FROM migrations ORDER BY id');

    for (const migrationRow of migrationRows) {
      await ensureComparisonTable(conn, migrationRow.id);
    }

    await conn.query('UPDATE migrations SET updated_at = NOW(6) WHERE id IN (?)', [migrationRows.map((row) => row.id)]);

    await conn.commit();
    console.log(`Seeded editable migration comparison table for ${migrationRows.length} migration row(s).`);
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    await conn.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
