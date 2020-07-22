

``mx.opt.adadelta``
======================================

Description
----------------------

Create an AdaDelta optimizer with respective parameters.

AdaDelta optimizer as described in Zeiler, M. D. (2012).
*ADADELTA: An adaptive learning rate method.*
http://arxiv.org/abs/1212.5701

Usage
----------

.. code:: r

	mx.opt.adadelta(

	  rho = 0.9,

	  epsilon = 1e-05,

	  wd = 0,

	  rescale.grad = 1,

	  clip_gradient = -1

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``rho``                                | float, default=0.90.                                       |
|                                        |                                                            |
|                                        | Decay rate for both squared gradients and delta x.         |
+----------------------------------------+------------------------------------------------------------+
| ``epsilon``                            | float, default=1e-5.                                       |
|                                        |                                                            |
|                                        | The constant as described in the thesis.                   |
+----------------------------------------+------------------------------------------------------------+
| ``wd``                                 | float, default=0.0.                                        |
|                                        |                                                            |
|                                        | L2 regularization coefficient add to all the weights.      |
+----------------------------------------+------------------------------------------------------------+
| ``rescale.grad``                       | float, default=1.                                          |
|                                        |                                                            |
|                                        | rescaling factor of gradient.                              |
+----------------------------------------+------------------------------------------------------------+
| ``clip_gradient``                      | float, default=-1 (no clipping if < 0).                    |
|                                        |                                                            |
|                                        | clip gradient in range [-clip_gradient, clip_gradient].    |
+----------------------------------------+------------------------------------------------------------+



