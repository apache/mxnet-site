

``mx.opt.rmsprop``
====================================

Description
----------------------

Create an RMSProp optimizer with respective parameters.
Reference: Tieleman T, Hinton G. Lecture 6.5- Divide the gradient by a running average of its recent magnitude[J]. COURSERA: Neural Networks for Machine Learning, 2012, 4(2).
The code follows: http://arxiv.org/pdf/1308.0850v5.pdf Eq(38) - Eq(45) by Alex Graves, 2013.

Create an RMSProp optimizer with respective parameters.
Reference: Tieleman T, Hinton G. Lecture 6.5-rmsprop: Divide the gradient by a running average of its recent magnitude[J]. COURSERA: Neural Networks for Machine Learning, 2012, 4(2).
The code follows: http://arxiv.org/pdf/1308.0850v5.pdf Eq(38) - Eq(45) by Alex Graves, 2013.

Usage
----------

.. code:: r

	mx.opt.rmsprop(

	  learning.rate = 0.002,

	  centered = TRUE,

	  gamma1 = 0.95,

	  gamma2 = 0.9,

	  epsilon = 1e-04,

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
| ``learning.rate``                      | float, default=0.002.                                      |
|                                        |                                                            |
|                                        | The initial learning rate.                                 |
+----------------------------------------+------------------------------------------------------------+
| ``gamma1``                             | float, default=0.95.                                       |
|                                        |                                                            |
|                                        | decay factor of moving average for gradient, gradient^2.   |
+----------------------------------------+------------------------------------------------------------+
| ``gamma2``                             | float, default=0.9.                                        |
|                                        |                                                            |
|                                        | "momentum" factor.                                         |
+----------------------------------------+------------------------------------------------------------+
| ``epsilon``                            | float, default=1e-4                                        |
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



