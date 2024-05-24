import { DataSource, Repository } from 'typeorm';
import { Transaccion } from '../models/transaccion.model'; // Ajusta la ruta según tu estructura de proyecto
import Logger from '../utils/logger'; // Importación del Logger

export class TransaccionService {
  private transaccionRepository: Repository<Transaccion>;
  private logger = Logger.getInstance(); // Instancia del Logger

  constructor(private dataSource: DataSource) {
    this.transaccionRepository = dataSource.getRepository(Transaccion);
    this.logger.info('Servicio de Transacción inicializado'); // Registro de actividad
  }

  // Crea una nueva transacción y la guarda en la base de datos
  public async crearTransaccion(transaccionData: Transaccion): Promise<Transaccion> {
    const nuevaTransaccion = this.transaccionRepository.create(transaccionData);
    await this.transaccionRepository.save(nuevaTransaccion);
    this.logger.info(`Transacción creada: ${nuevaTransaccion.transaccionID}`); // Registro de actividad
    return nuevaTransaccion;
  }

  // Obtiene todas las transacciones de la base de datos
  public async obtenerTransacciones(): Promise<Transaccion[]> {
    const transacciones = await this.transaccionRepository.find();
    this.logger.info('Obtenidas todas las transacciones'); // Registro de actividad
    return transacciones;
  }

  // Obtiene una transacción por su ID
  public async obtenerTransaccionPorId(transaccionID: number): Promise<Transaccion | null> {
    const transaccion = await this.transaccionRepository.findOne({
      where: { transaccionID }
    });
    this.logger.info(`Transacción solicitada: ID ${transaccionID}`); // Registro de actividad
    return transaccion;
  }

  // Actualiza una transacción existente y devuelve la transacción actualizada
  public async actualizarTransaccion(transaccionID: number, transaccionData: Partial<Transaccion>): Promise<Transaccion | null> {
    await this.transaccionRepository.update(transaccionID, transaccionData);
    const transaccionActualizada = await this.transaccionRepository.findOne({
      where: { transaccionID }
    });
    this.logger.info(`Transacción actualizada: ID ${transaccionID}`); // Registro de actividad
    return transaccionActualizada;
  }

  // Elimina una transacción por su ID
  public async eliminarTransaccion(transaccionID: number): Promise<void> {
    await this.transaccionRepository.delete(transaccionID);
    this.logger.info(`Transacción eliminada: ID ${transaccionID}`); // Registro de actividad
  }
}
