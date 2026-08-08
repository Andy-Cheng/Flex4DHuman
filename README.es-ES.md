

<div align="center">

# Flex4DHuman: Difusión de Video Multivista Flexible para Reconstrucción 4D de Humanos

[Jen-Hao Cheng](https://jen-haocheng.com/)<sup>1,2</sup> &nbsp;·&nbsp;
[Yipeng Wang](https://www.yipeng.dev)<sup>2,†</sup> &nbsp;·&nbsp;
[Hao Zhang](https://haoz19.github.io)<sup>2</sup> &nbsp;·&nbsp;
[Gengshan Yang](https://gengshan-y.github.io)<sup>2</sup> &nbsp;·&nbsp;
[Jenq-Neng Hwang](https://people.ece.uw.edu/hwang/)<sup>1</sup>

<sup>1</sup> [Universidad de Washington](https://www.washington.edu/) &nbsp;&nbsp; <sup>2</sup> [World Labs](https://www.worldlabs.ai/)

<sup>†</sup> Líder del proyecto

[![Project Page](https://img.shields.io/badge/Project-Page-1f2d3d)](https://andy-cheng.github.io/Flex4DHuman/)
[![arXiv](https://img.shields.io/badge/arXiv-2606.13655-b31b1b)](https://arxiv.org/abs/2606.13655)
[![Data](https://img.shields.io/badge/%F0%9F%A4%97%20Multi--view%20Caption-Data-yellow)](https://huggingface.co/datasets/andaba/multi-view_caption)

</div>

---

## Descripción general

**Flex4DHuman** convierte videos monoculares o multivista dispersos de sujetos dinámicos en
videos multivista densos sincronizados utilizando únicamente el **condicionamiento por pose relativa de la cámara**
— sin información geométrica previa —, lo que permite la reconstrucción directa de **splats gaussianos 4D**.

Dado uno o más videos de vista de referencia, sus poses de cámara y un conjunto de poses de cámara objetivo,
Flex4DHuman sintetiza videos de vista nueva coherentes a lo largo de las vistas objetivo
mediante difusión de video condicionada por pose de cámara. Los videos multivista sincronizados generados
pueden luego elevarse a splats gaussianos 4D, habilitando aplicaciones en
AR/VR, videojuegos, simulación y regrabación de video.

<div align="center">

![Flex4DHuman demo](flex4dhuman_demo_short.gif)

</div>

## Aspectos destacados

- **Entrada flexible** — funciona a partir de una vista monocular o múltiples vistas de referencia.
- **Condicionamiento únicamente por pose** — se basa exclusivamente en poses relativas de la cámara; no requiere prioris SMPL/geométricos.
- **Salida multivista densa sincronizada** — vistas nuevas consistentes en el tiempo y entre diferentes ángulos.
- **Reconstrucción 4D directa** — las vistas generadas pueden elevarse a splats gaussianos 4D.

## Noticias

- **2026-06-11** — Página del proyecto lanzada. El lanzamiento del código está en preparación — manténgase atento.


## Datos

Publicamos el conjunto de datos **Multi-view Caption** utilizado en este proyecto en Hugging Face:


Consulte [`andaba/multi-view_caption`](https://huggingface.co/datasets/andaba/multi-view_caption)
para ver el contenido y la licencia.

## Citación

Si encuentra útil nuestro trabajo, considere citarlo:

```bibtex
@article{cheng2026flex4dhuman,
  title={Flex4DHuman: Flexible Multi-view Video Diffusion for 4D Human Reconstruction},
  author={Cheng, Jen-Hao and Wang, Yipeng and Zhang, Hao and Yang, Gengshan and Hwang, Jenq-Neng},
  journal={arXiv preprint arXiv:2606.13655},
  year={2026}
}
```

## Agradecimientos

Agradezco a Claude Code (Opus) por la codificación y la generación de ideas incansables a lo largo de este proyecto.
