import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.model';

@Entity({ name: 'Presupuestos' })
export class Presupuesto {
  @PrimaryGeneratedColumn()
  presupuestoID!: number;

  @Column()
  usuarioID!: number;

  @Column({ type: 'nvarchar', length: 100 })
  nombrePresupuesto!: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  monto!: number;

  @Column({ type: 'datetime2' })
  fechaInicio!: Date;

  @Column({ type: 'datetime2' })
  fechaFin!: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioID' })
  usuario!: Usuario;
}
