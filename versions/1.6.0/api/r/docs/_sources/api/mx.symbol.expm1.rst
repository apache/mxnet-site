

``mx.symbol.expm1``
======================================

Description
----------------------

Returns ``exp(x) - 1`` computed element-wise on the input.

This function provides greater precision than ``exp(x) - 1`` for small values of ``x``.

The storage type of ``expm1`` output depends upon the input storage type:

	- expm1(default) = default
	- expm1(row_sparse) = row_sparse
	- expm1(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.expm1(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_logexp.cc#L224

