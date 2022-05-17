// import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    // const novoAluno = await Aluno.create({
    //   nome: 'Guido',
    //   sobrenome: 'Gabriel',
    //   email: 'guido.gabriel1987@gmail.com',
    //   idade: '34',
    //   peso: '80',
    //   altura: '1.70',
    // });
    // res.json(novoAluno);
    res.json('index');
  }
}

export default new HomeController();
