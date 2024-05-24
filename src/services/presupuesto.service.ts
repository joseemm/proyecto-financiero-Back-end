import { DataSource, Repository } from 'typeorm';
import { Presupuesto } from '../models/presupuesto.model'; // Ajusta la ruta según tu estructura de proyecto

export class PresupuestoService {
  private presupuestoRepository: Repository<Presupuesto>;

  constructor(private dataSource: DataSource) {
    this.presupuestoRepository = dataSource.getRepository(Presupuesto);
  }

  // Crea un nuevo presupuesto y lo guarda en la base de datos
  public async crearPresupuesto(presupuestoData: Presupuesto): Promise<Presupuesto> {
    const nuevoPresupuesto = this.presupuestoRepository.create(presupuestoData);
    return await this.presupuestoRepository.save(nuevoPresupuesto);
  }

  // Obtiene todos los presupuestos de la base de datos
  public async obtenerPresupuestos(): Promise<Presupuesto[]> {
    return await this.presupuestoRepository.find();
  }

  // Obtiene un presupuesto por su ID
  public async obtenerPresupuestoPorId(presupuestoID: number): Promise<Presupuesto | null> {
    return await this.presupuestoRepository.findOne({
      where: { presupuestoID }
    });
  }

  // Actualiza un presupuesto existente y devuelve el presupuesto actualizado
  public async actualizarPresupuesto(presupuestoID: number, presupuestoData: Partial<Presupuesto>): Promise<Presupuesto | null> {
    await this.presupuestoRepository.update(presupuestoID, presupuestoData);
    return await this.presupuestoRepository.findOne({
      where: { presupuestoID }
    });
  }

  // Elimina un presupuesto por su ID
  public async eliminarPresupuesto(presupuestoID: number): Promise<void> {
    await this.presupuestoRepository.delete(presupuestoID);
  }
}
