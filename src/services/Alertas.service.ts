import { DataSource, Repository } from 'typeorm';
import { Alerta } from '../models/Alertas.model'; // Ajusta la ruta según tu estructura de proyecto

export class AlertasService {
  private alertaRepository: Repository<Alerta>;

  constructor(private dataSource: DataSource) {
    this.alertaRepository = dataSource.getRepository(Alerta);
  }

  // Crea una nueva alerta y la guarda en la base de datos
  public async crearAlerta(alertaData: Alerta): Promise<Alerta> {
    const nuevaAlerta = this.alertaRepository.create(alertaData);
    return await this.alertaRepository.save(nuevaAlerta);
  }

  // Obtiene todas las alertas de la base de datos
  public async obtenerAlertas(): Promise<Alerta[]> {
    return await this.alertaRepository.find();
  }

  // Obtiene una alerta por su ID
  public async obtenerAlertaPorId(alertaID: number): Promise<Alerta | null> {
    return await this.alertaRepository.findOne({
      where: { alertaID }
    });
  }

  // Actualiza una alerta existente y devuelve la alerta actualizada
  public async actualizarAlerta(alertaID: number, alertaData: Partial<Alerta>): Promise<Alerta | null> {
    await this.alertaRepository.update(alertaID, alertaData);
    return await this.alertaRepository.findOne({
      where: { alertaID }
    });
  }

  // Elimina una alerta por su ID
  public async eliminarAlerta(alertaID: number): Promise<void> {
    await this.alertaRepository.delete(alertaID);
  }
}
