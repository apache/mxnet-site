

``mx.nd.degrees``
==================================

Description
----------------------

Converts each element of the input array from radians to degrees.

.. math::

   degrees([0, \pi/2, \pi, 3\pi/2, 2\pi]) = [0, 90, 180, 270, 360]

The storage type of ``degrees`` output depends upon the input storage type:

	- degrees(default) = default
	- degrees(row_sparse) = row_sparse
	- degrees(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L274

