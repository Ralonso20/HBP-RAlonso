import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestMigration1717456483733 implements MigrationInterface {
  name = 'TestMigration1717456483733';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "country" character varying`,
    );
  }
}
