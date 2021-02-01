import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCatTable1611114721303 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
          CREATE TABLE cat (
          id  SERIAL PRIMARY KEY,
          name VARCHAR(20) NOT NULL,
          age INT NOT NULL,
          color VARCHAR(20) NOT NULL
          )
          `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS cat`);
  }
}
