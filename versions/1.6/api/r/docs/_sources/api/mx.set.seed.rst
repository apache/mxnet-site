

``mx.set.seed``
==============================

Description
----------------------

Set the seed used by mxnet device-specific random number generators.

We have a specific reason why ``mx.set.seed`` is introduced,
instead of simply use ``set.seed``.

The reason that is that most of mxnet random number generator
can run on different devices, such as GPU.
We need to use massively parallel PRNG on GPU to get fast
random number generations. It can also be quite costly to seed these PRNGs.
So we introduced ``mx.set.seed`` for mxnet specific device random numbers.

**Example**::

	 mx.set.seed(0)
	 as.array(mx.runif(2))
	 # 0.5488135 0.5928446
	 mx.set.seed(0)
	 as.array(mx.rnorm(2))
	 # 2.212206 1.163079
	 
Usage
----------

.. code:: r

	mx.set.seed(seed)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``seed``                               | the seed value to the device random number generators.     |
+----------------------------------------+------------------------------------------------------------+



