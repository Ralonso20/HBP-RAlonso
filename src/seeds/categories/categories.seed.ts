import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { categories } from './categories-mock';

@Injectable()
export class CategoriesSeed {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    // Obtener todas las categorías existentes de una vez
    const existingCategories = await this.categoryRepository.find({
      where: { name: In(categories) },
    });

    // Usar for...of para asegurar la ejecución secuencial de las operaciones asíncronas
    for (const categoryName of categories) {
      // Verificar si la categoría actual existe en el conjunto de resultados
      if (
        !existingCategories.some((category) => category.name === categoryName)
      ) {
        const category = new Category();
        category.name = categoryName;
        await this.categoryRepository.save(category);
      }
    }
  }
}
