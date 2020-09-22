

``mx.opt.adam``
==============================

Description
----------------------

Create an Adam optimizer with respective parameters.
Adam optimizer as described in [King2014].

[King2014] Diederik Kingma, Jimmy Ba,
Adam: A Method for Stochastic Optimization,
http://arxiv.org/abs/1412.6980

Usage
----------

.. code:: r

	mx.opt.adam(

	  learning.rate = 0.001,

	  beta1 = 0.9,

	  beta2 = 0.999,

	  epsilon = 1e-08,

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
| ``learning.rate``                      | float, default=1e-3.                                       |
|                                        |                                                            |
|                                        | The initial learning rate.                                 |
+----------------------------------------+------------------------------------------------------------+
| ``beta1``                              | float, default=0.9.                                        |
|                                        |                                                            |
|                                        | Exponential decay rate for the first moment estimates.     |
+----------------------------------------+------------------------------------------------------------+
| ``beta2``                              | float, default=0.999.                                      |
|                                        |                                                            |
|                                        | Exponential decay rate for the second moment estimates.    |
+----------------------------------------+------------------------------------------------------------+
| ``epsilon``                            | float, default=1e-8                                        |
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



