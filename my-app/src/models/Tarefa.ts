import { Categoria } from "./Categoria";

export interface Tarefa{
    tarefaId?: string;
    titulo: string;
    descricao: string;
    criadoEm: string;
    categoriaId: number;
    status: string;
    categoria?: Categoria;
}