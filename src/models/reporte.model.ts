import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.model';

@Entity({ name: 'Reportes' })
export class Reporte {
  @PrimaryGeneratedColumn()
  reporteID!: number;

  @Column()
  usuarioID!: number;

  @Column({ type: 'nvarchar', length: 50 })
  tipoReporte!: string;

  @Column({ type: 'datetime2' })
  fechaGeneracion!: Date;

  @Column({ type: 'nvarchar' })
  contenido!: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioID' })
  usuario!: Usuario;
}
