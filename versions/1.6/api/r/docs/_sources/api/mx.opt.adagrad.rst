

``mx.opt.adagrad``
====================================

Description
----------------------

Create an AdaGrad optimizer with respective parameters.
AdaGrad optimizer of Duchi et al., 2011,

This code follows the version in http://arxiv.org/pdf/1212.5701v1.pdf  Eq(5)
by Matthew D. Zeiler, 2012. AdaGrad will help the network to converge faster
in some cases.

Usage
----------

.. code:: r

	mx.opt.adagrad(

	  learning.rate = 0.05,

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
| ``learning.rate``                      | float, default=0.05.                                       |
|                                        |                                                            |
|                                        | Step size.                                                 |
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
| ``clip_gradient``                      | float, default=-1.0 (no clipping if < 0).                  |
|                                        |                                                            |
|                                        | clip gradient in range [-clip_gradient, clip_gradient].    |
+----------------------------------------+------------------------------------------------------------+
| ``lr_scheduler``                       | function, optional.                                        |
|                                        |                                                            |
|                                        | The learning rate scheduler.                               |
+----------------------------------------+------------------------------------------------------------+



