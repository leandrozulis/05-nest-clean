import { Controller, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
export class CreateQuestionController {

  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  @Post()
  async handle() {
    return 'ok'
  }
}