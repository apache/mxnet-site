

``mx.nd.relu``
============================

Description
----------------------

Computes rectified linear activation.

.. math::

   max(features, 0)

The storage type of ``relu`` output depends upon the input storage type:

	- relu(default) = default
	- relu(row_sparse) = row_sparse
	- relu(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L85

