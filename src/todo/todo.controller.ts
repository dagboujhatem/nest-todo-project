import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto, @Res() response) {
    const createdTodo = await this.todoService.create(createTodoDto);
    return response.status(HttpStatus.CREATED).json(createdTodo);
  }

  @Get()
  async findAll(@Res() response) {
    const allTodos = await this.todoService.findAll();
    return response.status(HttpStatus.OK).json(allTodos);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    const todo = await this.todoService.findOne(id);
    return response.status(HttpStatus.OK).json(todo);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto, @Res() response) {
    const updatedTodo = await this.todoService.update(id, updateTodoDto);
    return response.status(HttpStatus.OK).json(updatedTodo);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    const deletedTodo = await this.todoService.remove(id);
    return response.status(HttpStatus.OK).json(deletedTodo);
  }
}
