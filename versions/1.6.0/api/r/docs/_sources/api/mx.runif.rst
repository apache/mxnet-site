

``mx.runif``
========================

Description
----------------------

Generate uniform distribution in [low, high) with specified shape.

**Example**::

	 mx.set.seed(0)
	 as.array(mx.runif(2))
	 # 0.5488135 0.5928446
	 mx.set.seed(0)
	 as.array(mx.rnorm(2))
	 # 2.212206 1.163079
	 
Usage
----------

.. code:: r

	mx.runif(shape, min = 0, max = 1, ctx = NULL)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``shape``                              | Dimension, The shape(dimension) of the result.             |
+----------------------------------------+------------------------------------------------------------+
| ``min``                                | numeric, The lower bound of distribution.                  |
+----------------------------------------+------------------------------------------------------------+
| ``max``                                | numeric, The upper bound of distribution.                  |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | optional The context device of the array. mx.ctx.default() |
|                                        | will be used in                                            |
|                                        | default.                                                   |
+----------------------------------------+------------------------------------------------------------+



