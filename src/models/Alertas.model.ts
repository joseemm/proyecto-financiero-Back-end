import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.model';

@Entity({ name: 'Alertas' })
export class Alerta {
  @PrimaryGeneratedColumn()
  alertaID!: number;

  @Column()
  usuarioID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  tipoAlerta!: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  valor!: number;

  @Column({ type: 'bit' })
  activa!: boolean;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  mensaje!: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioID' })
  usuario!: Usuario;
}
