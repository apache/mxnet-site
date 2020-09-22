

``mx.nd.arctanh``
==================================

Description
----------------------

Returns the element-wise inverse hyperbolic tangent of the input array, \
computed element-wise.

The storage type of ``arctanh`` output depends upon the input storage type:

	- arctanh(default) = default
	- arctanh(row_sparse) = row_sparse
	- arctanh(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L515

