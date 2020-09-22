

``mx.opt.sgd``
============================

Description
----------------------

Create an SGD optimizer with respective parameters.
Perform SGD with momentum update

Usage
----------

.. code:: r

	mx.opt.sgd(

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
|                                        | L2 regularization coefficient add to all the weights.      |
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



