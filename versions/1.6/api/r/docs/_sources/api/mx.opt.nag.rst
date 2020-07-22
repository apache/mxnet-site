

``mx.opt.nag``
============================

Description
----------------------

Create a Nesterov Accelerated SGD( NAG) optimizer.

NAG optimizer is described in Aleksandar Botev. et al (2016).
*NAG: A Nesterov accelerated SGD.*
https://arxiv.org/pdf/1607.01981.pdf

Usage
----------

.. code:: r

	mx.opt.nag(

	  learning.rate = 0.01,

	  momentum = 0,

	  wd = 0,

	  rescale.grad = 1,

	  clip_gradient = -1,

	  lr_scheduler = NULL

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``learning.rate``                      | float, default=0.01.                                       |
|                                        |                                                            |
|                                        | The initial learning rate.                                 |
+----------------------------------------+------------------------------------------------------------+
| ``momentum``                           | float, default=0.                                          |
|                                        |                                                            |
|                                        | The momentum value                                         |
+----------------------------------------+------------------------------------------------------------+
| ``wd``                                 | float, default=0.0.                                        |
|                                        |                                                            |
|                                        | L2 regularization coefficient added to all the weights.    |
+----------------------------------------+------------------------------------------------------------+
| ``rescale.grad``                       | float, default=1.0.                                        |
|                                        |                                                            |
|                                        | rescaling factor of gradient.                              |
+----------------------------------------+------------------------------------------------------------+
| ``clip_gradient``                      | float, optional, default=-1 (no clipping if < 0).          |
|                                        |                                                            |
|                                        | clip gradient in range [-clip_gradient, clip_gradient].    |
+----------------------------------------+------------------------------------------------------------+
| ``lr_scheduler``                       | function, optional.                                        |
|                                        |                                                            |
|                                        | The learning rate scheduler.                               |
+----------------------------------------+------------------------------------------------------------+



