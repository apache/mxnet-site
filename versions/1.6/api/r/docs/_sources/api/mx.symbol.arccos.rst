

``mx.symbol.arccos``
========================================

Description
----------------------

Returns element-wise inverse cosine of the input array.

The input should be in range `[-1, 1]`.
The output is in the closed interval :math:`[0, \pi]`

.. math::

   arccos([-1, -.707, 0, .707, 1]) = [\pi, 3\pi/4, \pi/2, \pi/4, 0]

The storage type of ``arccos`` output is always dense




Usage
----------

.. code:: r

	mx.symbol.arccos(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L206

