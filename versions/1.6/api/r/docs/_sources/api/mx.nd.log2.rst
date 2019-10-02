

``mx.nd.log2``
============================

Description
----------------------

Returns element-wise Base-2 logarithmic value of the input.

``2**log2(x) = x``

The storage type of ``log2`` output is always dense





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_logexp.cc#L105

