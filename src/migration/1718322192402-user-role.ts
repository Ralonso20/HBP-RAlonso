import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRole1718322192402 implements MigrationInterface {
  name = 'UserRole1718322192402';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."user_administrator_enum" AS ENUM('user', 'admin')`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "administrator" "public"."user_administrator_enum" NOT NULL DEFAULT 'user'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "administrator"`);
    await queryRunner.query(`DROP TYPE "public"."user_administrator_enum"`);
  }
}
