import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaQuesitonsRepository } from "./prisma/repositories/prisma-questions-repository";
import { PrismaQuesitonCommentsRepository } from "./prisma/repositories/prisma-question-comments-repository";
import { PrismaQuesitonAttachmentsRepository } from "./prisma/repositories/prisma-question-attachments-repository";
import { PrismaAnswersRepository } from "./prisma/repositories/prisma-answers-repository";
import { PrismaAnswerCommentsRepository } from "./prisma/repositories/prisma-answer-comments-repository";
import { PrismaAnswerAttachmentsRepository } from "./prisma/repositories/prisma-answer-attachments-repository";

@Module({
  providers: [
    PrismaService, 
    PrismaQuesitonsRepository,
    PrismaQuesitonCommentsRepository,
    PrismaQuesitonAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository
  ],
  exports: [
    PrismaService,
    PrismaQuesitonsRepository,
    PrismaQuesitonCommentsRepository,
    PrismaQuesitonAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository
  ]
})
export class DatabaseModule {}