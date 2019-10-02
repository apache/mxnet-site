

``mx.nd.tan``
==========================

Description
----------------------

Computes the element-wise tangent of the input array.

The input should be in radians (:math:`2\pi` rad equals 360 degrees).

.. math::

   tan([0, \pi/4, \pi/2]) = [0, 1, -inf]

The storage type of ``tan`` output depends upon the input storage type:

	- tan(default) = default
	- tan(row_sparse) = row_sparse
	- tan(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L140

