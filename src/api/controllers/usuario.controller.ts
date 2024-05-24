import { Request, Response } from 'express';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppDataSource } from '../../data-source'; 


export class UsuarioController {
  private usuarioService: UsuarioService;

  constructor() {
    this.usuarioService = new UsuarioService(AppDataSource);
  }

  public async crearUsuario(req: Request, res: Response): Promise<Response> {
    try {
      const usuarioData: Usuario = req.body;
      const nuevoUsuario = await this.usuarioService.crearUsuario(usuarioData);
      return res.status(201).json(nuevoUsuario);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerUsuarios(req: Request, res: Response): Promise<Response> {
    try {
      const usuarios = await this.usuarioService.obtenerUsuarios();
      return res.status(200).json(usuarios);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async obtenerUsuario(req: Request, res: Response): Promise<Response> {
    try {
      const usuarioId = parseInt(req.params.id);
      const usuario = await this.usuarioService.obtenerUsuarioPorId(usuarioId);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      return res.status(200).json(usuario);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async actualizarUsuario(req: Request, res: Response): Promise<Response> {
    try {
      const usuarioId = parseInt(req.params.id);
      const usuarioData: Usuario = req.body;
      const usuarioActualizado = await this.usuarioService.actualizarUsuario(usuarioId, usuarioData);
      return res.status(200).json(usuarioActualizado);
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }

  public async eliminarUsuario(req: Request, res: Response): Promise<Response> {
    try {
      const usuarioId = parseInt(req.params.id);
      await this.usuarioService.eliminarUsuario(usuarioId);
      return res.status(204).send();
    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ error: e.message });
    }
  }
}
