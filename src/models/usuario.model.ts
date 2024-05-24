import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import Logger from '../utils/logger';

@Entity({ name: 'Usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  usuarioID!: number;

  @Column({ type: 'nvarchar', length: 100 })
  nombre!: string;

  @Column({ type: 'nvarchar', length: 100, unique: true })
  email!: string;

  @Column({ type: 'nvarchar', length: 100 })
  contraseña!: string; // Considera usar un hash en lugar de texto plano

  @CreateDateColumn({ type: 'datetime2' })
  fechaCreacion!: Date;

  constructor() {
    Logger.getInstance().info(`Se ha creado una instancia de Usuario con el email: ${this.email}`);
  }
}
