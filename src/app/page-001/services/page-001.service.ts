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

  private hdrTexture: BABYLON.CubeTexture;

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

    /* this.scene.debugLayer.show(); */

    // HDR

    this.hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("../../assets/env/environment.env", this.scene);
    this.hdrTexture.rotationY = Math.PI/2;
    this.scene.environmentTexture = this.hdrTexture;

    this.camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, 0), this.scene);
    this.camera.position = new BABYLON.Vector3(10, 10, 10);
    this.camera.target = new BABYLON.Vector3(0, 0, 0);
    this.camera.attachControl(canvas, true);

    this.light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this.scene);
    this.light.intensity = 1;

    const Panel_front_1_MATERIAL = new BABYLON.PBRMaterial("Panel_front_1_MATERIAL", this.scene);
    Panel_front_1_MATERIAL.albedoColor = new BABYLON.Color3(0, 0, 0);
    Panel_front_1_MATERIAL.metallic = 0.3;
    Panel_front_1_MATERIAL.roughness = 0;
    Panel_front_1_MATERIAL.alpha = 0.5;

    const Panel_front_2_MATERIAL = new BABYLON.PBRMaterial("Panel_front_2_MATERIAL", this.scene);
    Panel_front_2_MATERIAL.albedoColor = new BABYLON.Color3(0, 0, 0);
    Panel_front_2_MATERIAL.metallic = 0.3;
    Panel_front_2_MATERIAL.roughness = 0;

    const Plastik_glanec_MATERIAL = new BABYLON.PBRMaterial("Plastik_glanec_MATERIAL", this.scene);
    Plastik_glanec_MATERIAL.albedoColor = new BABYLON.Color3(0, 0, 0);
    Plastik_glanec_MATERIAL.metallic = 0.1;
    Plastik_glanec_MATERIAL.roughness = 0.8;

    const Chrom_Kant_MATERIAL = new BABYLON.PBRMaterial("Chrom_Kant_MATERIAL", this.scene);
    Chrom_Kant_MATERIAL.albedoColor = new BABYLON.Color3(1, 1, 1);
    Chrom_Kant_MATERIAL.metallic = 1;
    Chrom_Kant_MATERIAL.roughness = 0.1;

    const Chrom_rem_MATERIAL = new BABYLON.PBRMaterial("Chrom_rem_MATERIAL", this.scene);
    Chrom_rem_MATERIAL.albedoColor = new BABYLON.Color3(1, 1, 1);
    Chrom_rem_MATERIAL.metallic = 1;
    Chrom_rem_MATERIAL.roughness = 0.1;

    const Screen_off_MATERIAL = new BABYLON.StandardMaterial("Screen_off_MATERIAL", this.scene);
    const Screen_off_MATERIAL_TEXTURE = new BABYLON.VideoTexture("video", "../../assets/videos/pi.mp4", this.scene);
    Screen_off_MATERIAL.diffuseTexture = Screen_off_MATERIAL_TEXTURE;
    Screen_off_MATERIAL.emissiveColor = BABYLON.Color3.White();

    const Chrom_MATERIAL = new BABYLON.PBRMaterial("Chrom_MATERIAL", this.scene);
    Chrom_MATERIAL.albedoColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    Chrom_MATERIAL.metallic = 1;
    Chrom_MATERIAL.roughness = 0.2;

    const Metall_strip_MATERIAL = new BABYLON.PBRMaterial("Metall_strip_MATERIAL", this.scene);
    Metall_strip_MATERIAL.albedoColor = new BABYLON.Color3(0.3, 0.3, 0.3);
    Metall_strip_MATERIAL.metallic = 1;
    Metall_strip_MATERIAL.roughness = 0.2;
    Metall_strip_MATERIAL.bumpTexture = new BABYLON.Texture("../../assets/img/textures/Metal_Brushed_Rough.jpg", this.scene);

    const Plastic_black_MATERIAL = new BABYLON.PBRMaterial("Plastic_black_MATERIAL", this.scene);
    Plastic_black_MATERIAL.albedoColor = new BABYLON.Color3(0, 0, 0);
    Plastic_black_MATERIAL.metallic = 0.1;
    Plastic_black_MATERIAL.roughness = 0.8;

    BABYLON.SceneLoader.ImportMesh("", "../../assets/gltf/page-001/", "Samsung_SMART_TV.gltf", this.scene, function (meshes) {
      const Key_power = meshes[1];
      /* Key_power.material = material; */

      const Panel_front_1 = meshes[2];
      Panel_front_1.material = Panel_front_1_MATERIAL;

      const Panel_front_2 = meshes[3];
      Panel_front_2.material = Panel_front_2_MATERIAL;

      const Remote_Steel_ward = meshes[4];
      /* Remote_Steel_ward.material = material; */

      const Phone_opas = meshes[5];
      /* Phone_opas.material = material; */

      const Plastik_glanec = meshes[6];
      Plastik_glanec.material = Plastik_glanec_MATERIAL;

      const Panel_back = meshes[7];
      /* Panel_back.material = material; */

      const Chrom_Kant = meshes[8];
      Chrom_Kant.material = Chrom_Kant_MATERIAL;

      const Remote_screen = meshes[9];
      /* Remote_screen.material = material; */

      const Chrom_rem = meshes[10];
      Chrom_rem.material = Chrom_rem_MATERIAL;

      const Back_label = meshes[11];
      /* Back_label.material = material; */

      const Screen_off = meshes[12];
      Screen_off.material = Screen_off_MATERIAL;

      const Chrom = meshes[13];
      Chrom.material = Chrom_MATERIAL;

      const Metall_strip = meshes[14];
      Metall_strip.material = Metall_strip_MATERIAL;

      const Glass_black = meshes[15];
      /* Glass_black.material = material; */

      const Metall_dark = meshes[16];
      /* Metall_dark.material = material; */

      const Gold = meshes[17];
      /* Gold.material = material; */

      const Steel = meshes[18];
      /* Steel.material = material; */

      const Plastic_black = meshes[19];
      Plastic_black.material = Plastic_black_MATERIAL;

      const Plastic_white = meshes[20];
      /* Plastic_white.material = material; */

      const Plastic_yellow = meshes[21];
      /* Plastic_yellow.material = material; */

      const Luminium = meshes[22];
      /* Luminium.material = material; */

      const Plastic_black_gloss = meshes[23];
      /* Plastic_black_gloss.material = material; */

      const Plastic_black_key = meshes[24];
      /* Plastic_black_key.material = material; */
    });



    Screen_off_MATERIAL_TEXTURE.video.play();

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
