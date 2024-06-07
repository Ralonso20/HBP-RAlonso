import { Injectable } from '@nestjs/common';
import { CreateFileUploadDto } from './dto/create-file-upload.dto';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
import { UploadFileDto } from './dto/upload-file.dto';

@Injectable()
export class FileUploadService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  async uploadFile(file: UploadFileDto) {
    return this.cloudinaryService.uploadFile(file.buffer, file.originalname);
  }

  async getUrl(publicId: string) {
    return this.cloudinaryService.getUrl(publicId);
  }

  create(createFileUploadDto: CreateFileUploadDto) {
    return 'This action adds a new fileUpload';
  }

  findAll() {
    return `This action returns all fileUpload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUpload`;
  }

  update(id: number, updateFileUploadDto: UpdateFileUploadDto) {
    return `This action updates a #${id} fileUpload`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUpload`;
  }
}
