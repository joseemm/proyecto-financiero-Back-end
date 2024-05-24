import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.model';

@Entity({ name: 'Cuentas' })
export class Cuenta {
  @PrimaryGeneratedColumn()
  cuentaID!: number;

  @Column()
  usuarioID!: number;

  @Column({ type: 'nvarchar', length: 100 })
  nombreCuenta!: string;

  @Column({ type: 'nvarchar', length: 50 })
  tipoCuenta!: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  saldo!: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioID' })
  usuario!: Usuario;
}
