import { Encrypter } from "@/domain/forum/application/cryptography/encrypter";
import { Module } from "@nestjs/common";
import { JwtEncrypter } from "./jwt-encrypter";
import { HashCompare } from "@/domain/forum/application/cryptography/hash-compare";
import { BcryptHashed } from "./bcrypt-hashed";
import { HashGenerator } from "@/domain/forum/application/cryptography/hash-generator";

@Module({
  providers: [
    {
      provide: Encrypter,
      useClass: JwtEncrypter
    },
    {
      provide: HashCompare,
      useClass: BcryptHashed
    },
    {
      provide: HashGenerator,
      useClass: BcryptHashed
    }
  ],
  exports: [
    Encrypter,
    HashCompare,
    HashGenerator
  ]
})
export class CryptographyModule {}