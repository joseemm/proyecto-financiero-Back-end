import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.model';

@Entity({ name: 'CategoriasPersonalizadas' })
export class CategoriaPersonalizada {
  @PrimaryGeneratedColumn()
  categoriaID!: number;

  @Column()
  usuarioID!: number;

  @Column({ type: 'nvarchar', length: 100 })
  nombreCategoria!: string;

  @Column({ type: 'nvarchar', length: 255, nullable: true })
  descripcion!: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuarioID' })
  usuario!: Usuario;
}
