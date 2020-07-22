

``mx.nd.cos``
==========================

Description
----------------------

Computes the element-wise cosine of the input array.

The input should be in radians (:math:`2\pi` rad equals 360 degrees).

.. math::

   cos([0, \pi/4, \pi/2]) = [1, 0.707, 0]

The storage type of ``cos`` output is always dense





Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L90

