import { DataSource, Repository } from 'typeorm';
import { Cuenta } from '../models/Cuentas.model'; // Ajusta la ruta según tu estructura de proyecto

export class CuentasService {
  private cuentaRepository: Repository<Cuenta>;

  constructor(private dataSource: DataSource) {
    this.cuentaRepository = dataSource.getRepository(Cuenta);
  }

  // Crea una nueva cuenta y la guarda en la base de datos
  public async crearCuenta(cuentaData: Cuenta): Promise<Cuenta> {
    const nuevaCuenta = this.cuentaRepository.create(cuentaData);
    return await this.cuentaRepository.save(nuevaCuenta);
  }

  // Obtiene todas las cuentas de la base de datos
  public async obtenerCuentas(): Promise<Cuenta[]> {
    return await this.cuentaRepository.find();
  }

  // Obtiene una cuenta por su ID
  public async obtenerCuentaPorId(cuentaID: number): Promise<Cuenta | null> {
    return await this.cuentaRepository.findOne({
      where: { cuentaID }
    });
  }

  // Actualiza una cuenta existente y devuelve la cuenta actualizada
  public async actualizarCuenta(cuentaID: number, cuentaData: Partial<Cuenta>): Promise<Cuenta | null> {
    await this.cuentaRepository.update(cuentaID, cuentaData);
    return await this.cuentaRepository.findOne({
      where: { cuentaID }
    });
  }

  // Elimina una cuenta por su ID
  public async eliminarCuenta(cuentaID: number): Promise<void> {
    await this.cuentaRepository.delete(cuentaID);
  }
}
