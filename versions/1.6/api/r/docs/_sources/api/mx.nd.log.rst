

``mx.nd.log``
==========================

Description
----------------------

Returns element-wise Natural logarithmic value of the input.

The natural logarithm is logarithm in base *e*, so that ``log(exp(x)) = x``

The storage type of ``log`` output is always dense





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_logexp.cc#L76

