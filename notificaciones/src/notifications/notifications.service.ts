import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {

    try {
      const notification = this.notificationRepository.create(
        
        createNotificationDto,
      );
      await this.notificationRepository.save(notification);
      return notification;
    } catch (error) {
      throw new InternalServerErrorException(`error with to db`);
    }
  }

  findAll() {
    return `This action returns all notifications`;
  }

  async findOne(id: string) {
    return await this.notificationRepository.findOneBy({ id });
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
