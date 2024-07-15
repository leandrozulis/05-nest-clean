import { InMemoryStudentRepository } from 'test/repositories/in-memory-student-repository';
import { FakeHasher } from 'test/cryptography/fake-hasher';
import { FakeEncypter } from 'test/cryptography/fake-encrypter';
import { AuthenticateStudentUseCase } from './authenticate-student';
import { makeStudent } from 'test/factories/make-student';

let inMemoryStudentRepository: InMemoryStudentRepository
let fakeHasher: FakeHasher
let fakeEncrypter: FakeEncypter
let sut: AuthenticateStudentUseCase;

describe('Authenticate Student', () => {

  beforeEach(() => {
    inMemoryStudentRepository = new InMemoryStudentRepository()
    fakeHasher = new FakeHasher()
    fakeEncrypter = new FakeEncypter()
    sut = new AuthenticateStudentUseCase(inMemoryStudentRepository, fakeHasher, fakeEncrypter);
  });

  it('Should be able to authenticate a student', async () => {

    const student = makeStudent({
      email: 'johndoe@example.com',
      password: await fakeHasher.hash('123456')
    })

    inMemoryStudentRepository.items.push(student)
      
    const result = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456'
    });
  
    expect(result.isRight()).toBe(true)
    expect(result.value).toEqual({
      accessToken: expect.any(String)
    })
  });

});
