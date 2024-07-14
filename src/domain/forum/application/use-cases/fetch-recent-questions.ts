import { Either, right } from '@/core/either';
import { Question } from '../../enterprise/entities/question';
import { QuestionsRepository } from '../repositories/questions-repository';
import { Injectable } from '@nestjs/common';

interface FetchRecentQuestionRequest {
  page: number
}

type FetchRecentQuestionResponse = Either<null, { question: Question[] }>

@Injectable()
export class FetchRecentQuestionUseCase {

  constructor(private questionsRepository : QuestionsRepository) {}

  async execute({ page }: FetchRecentQuestionRequest): Promise<FetchRecentQuestionResponse> {

    const question = await this.questionsRepository.findManyRecent({ page });

    return right({ question });
  }
}