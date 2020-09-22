

``mx.nd.arcsinh``
==================================

Description
----------------------

Returns the element-wise inverse hyperbolic sine of the input array, \
computed element-wise.

The storage type of ``arcsinh`` output depends upon the input storage type:

	- arcsinh(default) = default
	- arcsinh(row_sparse) = row_sparse
	- arcsinh(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L436

