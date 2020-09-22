

``mx.symbol.tanh``
====================================

Description
----------------------

Returns the hyperbolic tangent of the input array, computed element-wise.

.. math::

   tanh(x) = sinh(x) / cosh(x)

The storage type of ``tanh`` output depends upon the input storage type:

	- tanh(default) = default
	- tanh(row_sparse) = row_sparse
	- tanh(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.tanh(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L393

