import { Injectable, NgZone, ElementRef } from '@angular/core';
import { WindowRefService } from '../../shared/services/window-ref.service';

import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

import 'pepjs';

import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class Page001Service {

  private canvas: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  private scene: BABYLON.Scene;

  private camera: BABYLON.UniversalCamera;

  private light: BABYLON.Light;

  private Samsung_SMART_TV;

  private axis_X;
  private axis_X_MATERIAL: BABYLON.StandardMaterial;
  private axis_Y;
  private axis_Y_MATERIAL: BABYLON.StandardMaterial;
  private axis_Z;
  private axis_Z_MATERIAL: BABYLON.StandardMaterial;

  public constructor(
    private ngZone: NgZone,
    private windowRef: WindowRefService,
    protected readonly interaction: InteractionService
  ) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    this.canvas = canvas.nativeElement;
    this.engine = new BABYLON.Engine(this.canvas, true);

    this.scene = new BABYLON.Scene(this.engine);

    this.camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, 0), this.scene);
    this.camera.position = new BABYLON.Vector3(10, 10, 10);
    this.camera.target = new BABYLON.Vector3(0, 0, 0);
    this.camera.attachControl(canvas, true);

    this.light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this.scene);
    this.light.intensity = 1;

    var material = new BABYLON.StandardMaterial("material", this.scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0);

    BABYLON.SceneLoader.ImportMesh("", "../../assets/gltf/page-001/", "Samsung_SMART_TV.gltf", this.scene, function (meshes) {
      const Key_power = meshes[1];
      Key_power.material = material;

      const Panel_front_1 = meshes[2];
      Panel_front_1.material = material;

      const Panel_front_2 = meshes[3];
      Panel_front_2.material = material;

      const Remote_Steel_ward = meshes[4];
      Remote_Steel_ward.material = material;

      const Phone_opas = meshes[5];
      Phone_opas.material = material;

      const Plastik_glanec = meshes[6];
      Plastik_glanec.material = material;

      const Panel_back = meshes[7];
      Panel_back.material = material;

      const Chrom_Kant = meshes[8];
      Chrom_Kant.material = material;

      const Remote_screen = meshes[9];
      Remote_screen.material = material;

      const Chrom_rem = meshes[10];
      Chrom_rem.material = material;

      const Back_label = meshes[11];
      Back_label.material = material;

      const Screen_off = meshes[12];
      Screen_off.material = material;

      const Chrom = meshes[13];
      Chrom.material = material;

      const Metall_strip = meshes[14];
      Metall_strip.material = material;

      const Glass_black = meshes[15];
      Glass_black.material = material;

      const Metall_dark = meshes[16];
      Metall_dark.material = material;

      const Gold = meshes[17];
      Gold.material = material;

      const Steel = meshes[18];
      Steel.material = material;

      const Plastic_black = meshes[19];
      Plastic_black.material = material;

      const Plastic_white = meshes[20];
      Plastic_white.material = material;

      const Plastic_yellow = meshes[21];
      Plastic_yellow.material = material;

      const Luminium = meshes[22];
      Luminium.material = material;

      const Plastic_black_gloss = meshes[23];
      Plastic_black_gloss.material = material;

      const Plastic_black_key = meshes[24];
      Plastic_black_key.material = material;
    });

    // AXIS

    this.axis_X = BABYLON.MeshBuilder.CreateBox("axis_X", {height: 0.2, width: 0.2, depth: 0.2});
    this.axis_X.position = new BABYLON.Vector3(5, 0, 0);
    this.axis_X_MATERIAL = new BABYLON.StandardMaterial("axis_X_MATERIAL", this.scene);
    this.axis_X_MATERIAL.diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.axis_X_MATERIAL.specularColor = new BABYLON.Color3(1, 0, 0);
    this.axis_X.material = this.axis_X_MATERIAL;

    this.axis_Y = BABYLON.MeshBuilder.CreateBox("axis_Y", {height: 0.2, width: 0.2, depth: 0.2});
    this.axis_Y.position = new BABYLON.Vector3(0, 0, 5);
    this.axis_Y_MATERIAL = new BABYLON.StandardMaterial("axis_Y_MATERIAL", this.scene);
    this.axis_Y_MATERIAL.diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.axis_Y_MATERIAL.specularColor = new BABYLON.Color3(0, 1, 0);
    this.axis_Y.material = this.axis_Y_MATERIAL;

    this.axis_Z = BABYLON.MeshBuilder.CreateBox("axis_Z", {height: 0.2, width: 0.2, depth: 0.2});
    this.axis_Z.position = new BABYLON.Vector3(0, 5, 0);
    this.axis_Z_MATERIAL = new BABYLON.StandardMaterial("axis_Z_MATERIAL", this.scene);
    this.axis_Z_MATERIAL.diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.axis_Z_MATERIAL.specularColor = new BABYLON.Color3(0, 0, 1);
    this.axis_Z.material = this.axis_Z_MATERIAL;
  }

  // ANIMATE

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }

  // CLEAN UP

  public cleanUp() {
    this.engine.stopRenderLoop();
    this.scene.dispose();
    this.engine.dispose();
  }
}
