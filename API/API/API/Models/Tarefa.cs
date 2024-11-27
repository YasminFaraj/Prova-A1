namespace API.Models;

public class Tarefa
{
    public string TarefaId { get; set; } = Guid.NewGuid().ToString();
    public string? Titulo { get; set; }
    public string? Descricao { get; set; }
    public string? CriadoEm { get; set; }
    public Categoria? Categoria { get; set; }
    public string? CategoriaId { get; set; }
    public string? Status { get; set; } = "Não iniciada";
}
