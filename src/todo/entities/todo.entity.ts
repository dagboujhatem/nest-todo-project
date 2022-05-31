import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type TodoDocument = Todo & Document;

@Schema({
    versionKey: false,
    timestamps: true
})
export class Todo {
    @Prop()
    name:string;

    @Prop()
    description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);