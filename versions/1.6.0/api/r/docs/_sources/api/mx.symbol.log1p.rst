

``mx.symbol.log1p``
======================================

Description
----------------------

Returns element-wise ``log(1 + x)`` value of the input.

This function is more accurate than ``log(1 + x)``  for small ``x`` so that
:math:`1+x\approx 1`

The storage type of ``log1p`` output depends upon the input storage type:

	- log1p(default) = default
	- log1p(row_sparse) = row_sparse
	- log1p(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.log1p(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_logexp.cc#L206

