import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CategoriaPersonalizada } from './CategoriasPersonalizadas.model';
import { Cuenta } from './Cuentas.model';
import Logger from '../utils/logger'; // Importación del Logger

@Entity({ name: 'Transacciones' })
export class Transaccion {
  private logger = Logger.getInstance(); // Instancia del Logger

  @PrimaryGeneratedColumn('increment')
  transaccionID!: number;

  @Column()
  cuentaID!: number;

  @Column({ nullable: true })
  categoriaID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  tipoTransaccion!: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  monto!: number;

  @Column({ type: 'datetime2' })
  fecha!: Date;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  descripcion!: string;

  @ManyToOne(() => Cuenta)
  @JoinColumn({ name: 'cuentaID' })
  cuenta!: Cuenta;

  @ManyToOne(() => CategoriaPersonalizada, { nullable: true })
  @JoinColumn({ name: 'categoriaID' })
  categoriaPersonalizada!: CategoriaPersonalizada;

  // Método para registrar la creación de una transacción
  registrarCreacion() {
    this.logger.info(`Transacción creada: ID ${this.transaccionID}, monto: ${this.monto}`);
  }
}
