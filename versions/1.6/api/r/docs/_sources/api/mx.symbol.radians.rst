

``mx.symbol.radians``
==========================================

Description
----------------------

Converts each element of the input array from degrees to radians.

.. math::

   radians([0, 90, 180, 270, 360]) = [0, \pi/2, \pi, 3\pi/2, 2\pi]

The storage type of ``radians`` output depends upon the input storage type:

	- radians(default) = default
	- radians(row_sparse) = row_sparse
	- radians(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.radians(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L293

